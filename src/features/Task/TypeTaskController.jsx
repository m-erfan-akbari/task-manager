import InputController from "../../ui/InputController";
import SelectController from "../../ui/SelectController";
import { bugSecurityLevels } from "../../utils/variables";

export default function TaskTypeController({
  task,
  users,
  handleInputChange,
  handleSelectChange,
}) {
  switch (task.type) {
    case 1:
      return (
        <InputController
          label="Estimate Time"
          id="estimatedTime"
          type="datetime-local"
          value={task.estimatedTime}
          onChange={handleInputChange}
          required
        />
      );
    case 2:
      return (
        <SelectController
          label="Bug Security Level"
          id="bugSecurityLevel"
          defaultValue={task.bugSecurityLevel}
          onChange={(e) => handleSelectChange(e, bugSecurityLevels)}
          data={bugSecurityLevels}
          render={(bugs) =>
            bugs.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))
          }
        />
      );
    case 3:
      return (
        <SelectController
          label="Reviewer"
          id="reviewer"
          defaultValue={task.reviewer}
          onChange={(e) => handleSelectChange(e, users)}
          data={users}
          render={(users) =>
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.role})
              </option>
            ))
          }
        />
      );
    default:
      return null;
  }
}
