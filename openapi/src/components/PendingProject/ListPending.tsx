import { Field } from "formik";

const ListPending = () => {
  return (
    <table className="table-fixed">
      <thead className="flex">
        <tr>
          <th className="basis-">
            <input type="checkbox" name="" id="" />
          </th>
          <th>Pending Project Name</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
    </table>
  );
};
export default ListPending;
