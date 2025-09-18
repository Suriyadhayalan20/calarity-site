import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'


export default function PatientLogin(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
// const { login } = useAuth()
const navigate = useNavigate()


const submit = async (e)=>{
e.preventDefault()
setLoading(true); setError(null)
try{
await login({ email, password, role: 'patient' })
navigate('/patient/portal')
}catch(err){
setError(err?.response?.data?.message || 'Login failed')
}finally{ setLoading(false) }
}


return (
<div className="row justify-content-center">
<div className="col-md-6">
<div className="card p-4">
<h4 className="mb-3">Patient Login</h4>
<small className="text-muted">Use your registered email to view prescriptions and appointments</small>
{error && <div className="alert alert-danger mt-2">{error}</div>}
<form onSubmit={submit} className="mt-3">
<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required />
</div>
<div className="mb-3">
<label className="form-label">Password</label>
<input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} required />
</div>
<button className="btn btn-primary" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
</form>
</div>
</div>
</div>
)
}