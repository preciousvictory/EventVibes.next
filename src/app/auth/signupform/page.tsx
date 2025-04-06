import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';
import AnimatedButton from "@/components/ui/Button";
import GradientLayout from "@/components/GradientLayout";
import { EventVibesLogo } from "@/assets/Logo";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>; 

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    console.log('Fprm Submitted: ', data);

    router.push('/events')
  }

  return (
    <GradientLayout>
      <EventVibesLogo />

      <h2 className="mb-3 text-center text-2xl font-semibold text-white">
        Let's Get You Started
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
        {/* Name Field */}
        <div className="flex flex-col items-start w-full">
          <label className="mb-1 block text-sm font-medium text-gray-400">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="e.g Jon Doe"
            required
            className="w-full rounded-lg border border-[var(--inputBorder)] bg-[var(--inputColor)] px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col items-start w-full">
          <label className="mb-1 block text-sm font-medium text-gray-400">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="example@yahoo.com"
            required
            className="w-full rounded-lg border border-[var(--inputBorder)] bg-[var(--inputColor)] px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <AnimatedButton
          variant="primary"
          className="w-full shadow-black/75 shadow-xl hover:shadow-lg transition-shadow mt-4"
        >
          Take to dashboard
        </AnimatedButton>
      </form>
    </GradientLayout>
  );
}
