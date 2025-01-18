import SelectController from "../../ui/SelectController";
import { taskTypes } from "../../utils/variables";

export default function FilterTaskType({ filter, onChange }) {
  const types = [
    { id: 0, name: "All", styles: "text-green-500 bg-green-100" },
    ...taskTypes,
  ];
  return (
    <div className="flex justify-between">
      <SelectController
        label=""
        id="type"
        defaultValue={filter.type}
        onChange={(e) => onChange(e, types)}
        data={types}
        render={(types) =>
          types.map((t) => (
            <option key={t.id} value={t.id} className={t.styles}>
              {t.name}
            </option>
          ))
        }
      />
    </div>
  );
}
