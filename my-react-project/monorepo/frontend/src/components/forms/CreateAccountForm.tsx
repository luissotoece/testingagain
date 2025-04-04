"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const router = useRouter(); 

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/AccountConfirmation"); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} placeholder="Enter your name" />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          {...register("username")}
          placeholder="Enter a username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* <Button
        type="submit"
        className={cn(
          "w-full bg-blue-600 hover:bg-blue-800 text-white transition-colors"
        )}
      >
        Create Account
      </Button> */}
      <Button
        type="submit"
        className={cn(
          "w-full text-white font-semibold py-2 px-4 rounded-lg transition",
          "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:from-blue-500 hover:via-blue-600 hover:to-blue-800"
        )}
      >
        Create Account
      </Button>

    </form>
  );
};

export default CreateAccountForm;



// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { cn } from "@/lib/utils"; 

// const formSchema = z
//   .object({
//     name: z.string().min(1, "Name is required"),
//     username: z.string().min(1, "Username is required"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// const CreateAccountForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(formSchema),
//     mode: "onChange",
//   });

//   const [isToggled, setIsToggled] = useState(false);

//   return (
//     <form
//       onSubmit={handleSubmit((data) => console.log("Form Data:", data))}
//       className="space-y-4"
//     >
//       <div>
//         <Label htmlFor="name">Name</Label>
//         <Input id="name" {...register("name")} placeholder="Enter your name" />
//         {errors.name && (
//           <p className="text-red-500 text-sm">{errors.name.message}</p>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="username">Username</Label>
//         <Input
//           id="username"
//           {...register("username")}
//           placeholder="Enter a username"
//         />
//         {errors.username && (
//           <p className="text-red-500 text-sm">{errors.username.message}</p>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="password">Password</Label>
//         <Input
//           id="password"
//           type="password"
//           {...register("password")}
//           placeholder="Enter your password"
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm">{errors.password.message}</p>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="confirmPassword">Confirm Password</Label>
//         <Input
//           id="confirmPassword"
//           type="password"
//           {...register("confirmPassword")}
//           placeholder="Confirm your password"
//         />
//         {errors.confirmPassword && (
//           <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
//         )}
//       </div>

//       <Button
//         type="submit"
//         className={cn(
//           "w-full bg-blue-400 hover:bg-blue-800 text-white transition-colors",
          
//         )}
        
//       >
//         Create Account
//       </Button>
//     </form>
//   );
// };

// export default CreateAccountForm;









