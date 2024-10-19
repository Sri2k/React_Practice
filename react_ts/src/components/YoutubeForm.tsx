import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let count = 0;

type FormValues = {
  username: string;
  email: string;
  identity: string;
};
export const YoutubeForm = () => {
  const form = useForm<FormValues>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  count++;

  const submitFn = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Form rendering count: {count / 2}</h1>
      <form onSubmit={handleSubmit(submitFn)} noValidate>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is mandatory",
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              validate: {
                blackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("xyz.com") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="identity">Identity</label>
          <input type="text" id="identity" {...register("identity")} />
        </div>

        <button>submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
