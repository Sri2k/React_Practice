import { useFieldArray, useForm } from "react-hook-form";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import { useEffect } from "react";

let count = 0;

type FormValues = {
  username: string;
  email: string;
  identity: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
};
export const YoutubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "madman",
      email: "",
      identity: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["1234567890", "0987654321"],
      phNumbers: [
        {
          number: "",
        },
      ],
      age: 0,
      dob: new Date(),
    },
    // defaultValues: async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   const data = await response.json();
    //   return {
    //     username: "madman",
    //     email: data.email,
    //     identity: "",
    //   };
    // },
  });

  const form = useForm<FormValues>({
    defaultValues: {
      username: "madman",
      email: "",
      identity: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["1234567890", "0987654321"],
      phNumbers: [
        {
          number: "",
        },
      ],
      age: 0,
      dob: new Date(),
    },
    // defaultValues: async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   const data = await response.json();
    //   return {
    //     username: "madman",
    //     email: data.email,
    //     identity: "",
    //   };
    // },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    watch,
    getValues,
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });
  count++;

  //const watchValues = watch();

  //const watchValues = watch();

  const submitFn = (data: FormValues) => {
    console.log(data);
  };

  useEffect(() => {
    const subscription = watch((values) => console.log("values: ", values));

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const handleGetValues = () => {
    console.log("getValues", getValues("social"));
  };

  useEffect(() => {
    const subscription = watch((values) => console.log("values: ", values));

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const handleGetValues = () => {
    console.log("getValues", getValues("social"));
  };
  return (
    <div>
      <h1>Form rendering count: {count / 2}</h1>
      {/* <h1>Form values: {JSON.stringify(watchValues)}</h1> */}

      {/* <h1>Form values: {JSON.stringify(watchValues)}</h1> */}

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
        <div>
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>
        <div>
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        <div>
          <label htmlFor="primary-phone">Primary Phone</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>
        <div>
          <label htmlFor="secondary-phone">Secondary Phone</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>
        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number`)}
                  />
                  {index > 0 && (
                    <button onClick={() => remove(index)}>
                      Remove Phone Number
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              {...register("age", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "age is mandatory",
                },
              })}
            />
            <p className="error">{errors.age?.message}</p>
          </div>
          <div>
            <label htmlFor="dob">DOB</label>
            <input
              type="date"
              id="dob"
              {...register("dob", {
                valueAsDate: true,
                required: {
                  value: false,
                  message: "dob is mandatory",
                },
              })}
            />
            <p className="error">{errors.dob?.message}</p>
          </div>
          <button
            onClick={() =>
              append({
                number: "",
              })
            }
          >
            Add Phone Number
          </button>
        </div>
        <button type="submit" onClick={() => handleGetValues()}>
          Get Values
        </button>
        <button>submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
