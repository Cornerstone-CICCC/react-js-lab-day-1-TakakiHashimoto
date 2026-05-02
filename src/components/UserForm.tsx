import { useState } from "react";

type Props = { onSubmit: (data: FormDataType) => void };

export interface FormDataType {
  fullname: string;
  age: number;
  education: string;
  gender: "Male" | "Female" | "other";
  skills: string[];
  bio: string;
}

const skills = ["Type script", "Node", "React", "NoSQL"];

function UserForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<FormDataType>({
    fullname: "",
    age: 0,
    education: "high school",
    gender: "Male",
    skills: [],
    bio: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    // on change, set the form data to the value
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;

    // if checked, add the value to the array, if not, remove the item from the array
    const newSkills = checked
      ? [...formData.skills, value]
      : formData.skills.filter((s) => s !== value);
    setFormData((prev) => ({ ...prev, skills: newSkills }));
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, education: value }));
  }

  function clearInputs() {
    setFormData({
      fullname: "",
      age: 0,
      education: "high school",
      gender: "Male",
      skills: [],
      bio: "",
    });
  }

  return (
    <div className="max-w-[80%]">
      <h2 className="text-3xl">User Info</h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();
          clearInputs();
          onSubmit(formData);
        }}
      >
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          placeholder="fullname"
          className="border border-blue-400 rounded-md p-2"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          className="border border-blue-400 rounded-md p-2"
          onChange={handleChange}
        />
        <select value={formData.education} onChange={handleSelect}>
          <option value="grade school">Grade School</option>
          <option value="high school">High School</option>
          <option value="colledge">Colledge</option>
        </select>
        <div className="flex gap-2">
          <label>
            <input
              type="radio"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              name="gender"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              name="gender"
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
              name="gender"
            />
            other
          </label>
        </div>
        <div className="flex gap-1">
          {skills.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleCheckbox}
              />
              {skill}
            </label>
          ))}
        </div>
        <textarea
          value={formData.bio}
          onChange={handleChange}
          rows={4}
          placeholder="Bio..."
          className="border border-blue rounded-md"
          name="bio"
        />
        <button type="submit">Add</button>
        <button type="button" onClick={clearInputs}>
          Clear inputs
        </button>
      </form>
    </div>
  );
}

export default UserForm;
