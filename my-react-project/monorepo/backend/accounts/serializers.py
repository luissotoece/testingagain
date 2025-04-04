from rest_framework import serializers
from .models import MyUser, Scholarship, UserChangeHistory

class MyUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, required=True)
    # Use a basic CharField for username instead of RegexField to avoid strict regex errors.
    username = serializers.CharField(min_length=4, max_length=150, required=True)
    
    class Meta:
        model = MyUser
        fields = [
            'id', 'username', 'password', 'email',
            'first_name', 'last_name', 'phone',
            'security_question1', 'security_answer1',
            'security_question2', 'security_answer2',
            'requested_role', 'role', 'role_approved'
        ]
        extra_kwargs = {
            'role': {'read_only': True},
            'role_approved': {'read_only': True},
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = MyUser(**validated_data)
        user.set_password(password)
        user.save()
        return user

class ScholarshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scholarship
        fields = '__all__'

class UserChangeHistorySerializer(serializers.ModelSerializer):
    changed_by = serializers.CharField(source="changed_by.username", read_only=True)

    class Meta:
        model = UserChangeHistory
        fields = ["user", "field_name", "old_value", "new_value", "changed_by", "timestamp"]

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ["username", "email", "first_name", "last_name", "phone"]

    def update(self, instance, validated_data):
        request = self.context.get("request")
        changed_by = request.user if request else None

        for field, new_value in validated_data.items():
            old_value = getattr(instance, field)
            if old_value != new_value:
                UserChangeHistory.objects.create(
                    user=instance,
                    field_name=field,
                    old_value=old_value,
                    new_value=new_value,
                    changed_by=changed_by
                )
        return super().update(instance, validated_data)