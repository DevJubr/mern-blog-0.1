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
          <tbody>
            <tr>
              <td>1</td>
              <td>habulla</td>
              <td>habulla@gmla.com</td>
              <td>img</td>
              <td>
                <div className="tblBtn">
                  <button className="block">block</button>
                  <button className="profile">profile</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubAdmin;
