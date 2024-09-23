import { FormEvent, useState } from "react";
import CustomSelectArray from "../../components/Select/SelectArray";



const AddBook = () => {
    const [avtor, setAvtor] = useState('')
    const [nameBook, setNameBook] = useState('')
    const [countPage, setCountPage] = useState('')
    const [ratting, setRatting] = useState('')
    const [review, setReview] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const send = () => {
        if(!avtor || nameBook || countPage || ratting || review) return setError('error')
        
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{ backgroundColor: '#1d1d1d', borderRadius: '10px', padding: '2em', marginTop: '5em' }}>
                        <h2 className="text-center" style={{ color: '#fff' }}>Добавление книги</h2>
                        {error && (
                            <p style={{
                                color: 'red'
                            }}>{error}</p>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" style={{ color: '#888' }}>Имя автора</label>
                                <input
                                    onChange={e => setAvtor(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label" style={{ color: '#888' }}>Название книги</label>
                                <input
                                    onChange={e => setNameBook(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" style={{ color: '#888' }}>Каличество страниц</label>
                                <input
                                    onChange={e => setCountPage(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" style={{ color: '#888' }}>Рейтинг</label>
                                <CustomSelectArray options={['1', '2', '3', '4', '5']} onChange={value => setRatting(value)} placeholder='Рейтинг'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label" style={{ color: '#888' }}>Ревью</label>
                                <input
                                    onChange={e => setReview(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    required
                                />
                            </div>
                            <button onChange={() => send()} type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#646cff', border: 'none', marginTop: '10px' }}>
                                Добавить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBook