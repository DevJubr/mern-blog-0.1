import PageHeader from "../../components/PageHeader";

const SubAdmin = () => {
  return (
    <div className="SubAdmin">
      <PageHeader name={"Sub admins"} />

      <div className="tbl__subA">
        <table className="subAd">
          <thead>
            <tr>
              <th>no.</th>
              <th>name</th>
              <th>email</th>
              <th>img</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default SubAdmin;
