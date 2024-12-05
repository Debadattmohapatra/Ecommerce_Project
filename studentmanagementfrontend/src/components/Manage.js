import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Table } from 'react-bootstrap';
import { getStudents, deleteStudent } from '../services/StudentService';
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";

function Manage() {

    const [students, setStudents] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);


    useEffect(() => {
        let mounted = true;
        if (students.length && !isUpdated) {
            return;
        }
        getStudents()
            .then(data => {
                if (mounted) {
                    setStudents(data);
                }
            })
        return () => {
            mounted = false;
            setIsUpdated(false);
        }
    }, [isUpdated, students])




    const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditStudent(stu);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, studentId) => {
        if (window.confirm('Are you sure ?')) {
            e.preventDefault();
            deleteStudent(studentId)
                .then((result) => {
                    alert(result);
                    setIsUpdated(true);
                },
                    (error) => {
                        alert("Failed to Delete Student");
                    })
        }
    };

    let AddModelClose = () => setAddModalShow(false);
    let EditModelClose = () => setEditModalShow(false);

    return (
        <div className='row side-row'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Registration No</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((stu) =>
                        <tr key={stu.id}>
                            <td>{stu.StudentId}</td>
                            <td>{stu.FirstName}</td>
                            <td>{stu.LastName}</td>
                            <td>{stu.RegistrationNo}</td>
                            <td>{stu.Email}</td>
                            <td>{stu.Course}</td>
                            <td>
                                <div className="d-inline-block mr-2">
                                    <Button
                                        className="mr-2"
                                        variant="info"
                                        onClick={(event) => handleUpdate(event, stu)}
                                    >
                                        <i className="bi bi-pencil-square"></i>
                                    </Button>
                                    <UpdateStudentModal
                                        show={editModalShow}
                                        student={editStudent}
                                        setUpdated={setIsUpdated}
                                        onHide={EditModelClose}
                                    ></UpdateStudentModal>
                                </div>
                                <div className="d-inline-block m-2">
                                    <Button
                                        className="mr-2"
                                        variant="danger"
                                        onClick={(event) => handleDelete(event, stu.StudentId)}
                                    >
                                        <i className="bi bi-trash3"></i>
                                    </Button>
                                </div>
                            </td>
                        </tr>)}
                </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>Add Student</Button>{' '}
                <AddStudentModal show={addModalShow} setUpdated={setIsUpdated}
                    onHide={AddModelClose}></AddStudentModal>
            </ButtonToolbar>
        </div>
    )
}

export default Manage
