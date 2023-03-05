import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

function Student() {

    const [loading, setLoading] = useState([true]);
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/students`).then(res => {
            // console.log(res)
            setStudents(res.data.students);
            setLoading(false);
        });
    }, [])

    if (loading) {
        return (
            <div className='mt-3'>
                <Loading/>
                <span>Chargement, Veuillez Patienter...</span>
            </div>
        )
    }

    var studentDetails = "";

    studentDetails = students.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.cours}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                <td>
                    <Link to="/" className="btn btn-primary btn-sm">Edit</Link>
                </td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-4">
                        
                        <div className="card-header mt-4">
                            <h3>liste des étudiants
                                <Link to="/createStudent" className='btn btn-primary btn-sm float-end'>Ajouter</Link>
                            </h3>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Cours</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th colSpan={2}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Student;