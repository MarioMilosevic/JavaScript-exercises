import { useState } from "react";
import classes from "./Table.module.css";

function BadTable({ issues }) {
  const [checkedState, setCheckedState] = useState([
    ...issues.map((issue) => ({ ...issue, checked: false })),
  ]);

  const [selectDeselectAllIsChecked, setSelectDeselectAllIsChecked] =
    useState(false);
  const [numCheckboxesSelected, setNumCheckboxesSelected] = useState(0);

  const handleOnChange = (id) => {
    const clickedElement = checkedState.find((el) => el.id === id);

    const updatedCheckedState = checkedState.map((element) => {
      return {
        ...element,
        checked:
          element.id === clickedElement.id ? !element.checked : element.checked,
      };
    });

    setCheckedState(updatedCheckedState);

    const totalSelected = updatedCheckedState
      .map((element) => element.checked)
      .filter((element) => element === true);

    setNumCheckboxesSelected(totalSelected.length);
  };

  const handleSelectDeselectAll = (event) => {
    const { checked } = event.target;

    setSelectDeselectAllIsChecked(checked);

    setCheckedState((previous) =>
      previous.map((element) => ({ ...element, checked })),
    );
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>
            <input
              className={classes.checkbox}
              type={"checkbox"}
              id={"custom-checkbox-selectDeselectAll"}
              name={"custom-checkbox-selectDeselectAll"}
              value={"custom-checkbox-selectDeselectAll"}
              checked={selectDeselectAllIsChecked}
              onChange={handleSelectDeselectAll}
            />
          </th>
          <th className={classes.numChecked}>
            {numCheckboxesSelected
              ? `Selected ${numCheckboxesSelected}`
              : "None selected"}
          </th>
        </tr>
        <tr>
          <th />
          <th>Name</th>
          <th>Message</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {checkedState.map(({ name, message, status, id }, index) => {
          const issueIsOpen = status === "open";
          const stylesTr = issueIsOpen
            ? classes.openIssue
            : classes.resolvedIssue;

          return (
            <tr className={stylesTr} style={checkedState[index]} key={id}>
              <td>
                {issueIsOpen ? (
                  <input
                    className={classes.checkbox}
                    type={"checkbox"}
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index].checked}
                    onChange={() => handleOnChange(id)}
                  />
                ) : (
                  <input
                    className={classes.checkbox}
                    type={"checkbox"}
                    disabled
                  />
                )}
              </td>
              <td>{name}</td>
              <td>{message}</td>
              <td>
                {issueIsOpen ? (
                  <span className={classes.greenCircle} />
                ) : (
                  <span className={classes.redCircle} />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default BadTable;
