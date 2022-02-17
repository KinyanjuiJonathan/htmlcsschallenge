

function Users(props) {
    return (
        <div>
            <h2>Users</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {
                    props.users.map(user => {
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
}

export default Users;