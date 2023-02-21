import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Student() {

    const [etudiants, setStudents] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/etudiant`).then(res => {
            console.log(res)
            setStudents(res.data.etudiants);
        });
    }, [])

    var studentDetails = "";

    studentDetails = etudiants.map( (item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.cours}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                <td>
                    <Link to="/" className="btn btn-primary btn-sm">Mdifier</Link>
                </td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm">Supprimer</button>
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
                                <Link to="/createStudent" className='btn btn-primary float-end'>Ajouter</Link>
                            </h3>
                        </div>

                        <div className="card-body">
                            <table className="table table-boderded table-stripped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Cours</th>
                                        <th>Email</th>
                                        <th>Phone</th>
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