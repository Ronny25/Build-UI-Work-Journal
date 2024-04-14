import {
  type MetaFunction,
  redirect,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const json = Object.fromEntries(formData);

  console.log(json);

  return redirect("/");
}

export default function Index() {
  return (
    <div className="p-10">
      <h1 className="text-5xl">Work Journal</h1>
      <p className="mt-2 text-lg text-gray-400">
        Learnings and doings. Updated weekly.
      </p>

      <div className="my-8 border p-3">
        <Form method="post">
          <p className="italic">Create an entry</p>

          <div>
            <div className="mt-4">
              <input className="text-gray-700" type="date" name="date" />
            </div>

            <div className="mt-2 space-x-6">
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="category"
                  value="work"
                />
                Work
              </label>
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="category"
                  value="learning"
                />
                Learning
              </label>
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="category"
                  value="interesting-thing"
                />
                Interesting thing
              </label>
            </div>

            <div className="mt-2">
              <textarea
                className="w-full text-gray-700"
                name="text"
                placeholder="Write your entry..."
              />
            </div>

            <div className="mt-1 text-right">
              <button
                className="bg-blue-500 px-4 py-1 font-medium text-white"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>

      <div className="mt-6">
        <p className="font-bold">
          Week of April 14<sup>th</sup>
        </p>
      </div>

      <div className="mt-3 space-y-4">
        <div>
          <p>Work</p>
          <ul className="ml-8 list-disc">
            <li>First item</li>
            <li>Second Item</li>
          </ul>
        </div>
        <div>
          <p>Learnings</p>
          <ul className="ml-8 list-disc">
            <li>First item</li>
            <li>Second Item</li>
          </ul>
        </div>
        <div>
          <p>Interesting things</p>
          <ul className="ml-8 list-disc">
            <li>First item</li>
            <li>Second Item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}