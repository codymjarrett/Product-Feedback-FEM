// storybook was way to convoluted to figure out with tailwind and remix so I just made a stupid route to test my components
import Select from "../components/Select";

const options = [
  { text: "Most Upvotes", value: "most_upvotes" },
  { text: "Least Upvotes", value: "least_upvotes" },
  { text: "Most Comments", value: "most_comments" },
  { text: "Least Comments", value: "least_comments" },
];
export default function Components() {
  return (
    <div>
      <h1 className="text-center text-4xl m-4">The Component Library</h1>
      <h2 className="text-3xl m-4">Custom Selector Element</h2>
      <Select options={options} title="Sort By" />
    </div>
  );
}
