import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

function StudentCreate() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const [inputErrorList, setInputErrorList] = useState({})

    const [student, setStudent] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        cours: ''
    })

    const handleInput = (e) => {
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value});
    }

    const saveStudent = (e) => {
        e.preventDefault();

        setLoading(true);

        const data = {
            nom: student.nom,
            prenom: student.prenom,
            email: student.email,
            telephone: student.telephone,
            cours: student.cours
        }

        axios.post(`http://127.0.0.1:8000/api/students`, data)
        .then(res => {
            alert(res.data.message);
            navigate('/students');
            setLoading(false);
        })
        .catch(function (error) {
            if (error.response) {
                if (error.response.status === 422) {
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }
                if (error.response.status === 500) {
                    alert(error.response.data)
                    setLoading(false);
                } 

            }
        });
    }

    if (loading) {
        return (
            <div className='mt-3'>
                <Loading/>
                <span>Chargement, Veuillez Patienter...</span>
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-4 mb-4">
                            
                            <div className="card-header">
                                <h3>Ajout des étudiants
                                    <Link to="/students" className='btn btn-danger btn-sm float-end'>Retour</Link>
                                </h3>
                            </div>

                            <div className="card-body shadow">
                                <form onSubmit={saveStudent}>
                                    <div className="mb-3">
                                        <label>Nom</label>
                                        <input type="text" name="nom" value={student.nom} onChange={handleInput} className="form-control"/>
                                        <span className='text-danger'>{inputErrorList.nom}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Prénom</label>
                                        <input type="text" name="prenom" value={student.prenom} onChange={handleInput} className="form-control"/>
                                        <span className='text-danger'>{inputErrorList.prenom}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" value={student.email} onChange={handleInput} className="form-control"/>
                                        <span className='text-danger'>{inputErrorList.email}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Telephone</label>
                                        <input type="text" name="telephone" value={student.telephone} onChange={handleInput} className="form-control"/>
                                        <span className='text-danger'>{inputErrorList.telephone}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Cours</label>
                                        <input type="text" name="cours" value={student.cours} onChange={handleInput} className="form-control"/>
                                        <span className='text-danger'>{inputErrorList.cours}</span>
                                    </div>

                                    <div className="mb-3">
                                        <button type='submit' className='btn btn-success'>Valider</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCreate;