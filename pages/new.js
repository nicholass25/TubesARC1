import { useState, useEffect } from 'react';
import { Button, Form, Loader } from 'semantic-ui-react';

const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [isSubmitting]);

    const createNote = async () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form-container">
            <h1>Create Note</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                label='Title'
                                placeholder='Title'
                                name='title'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Descriprtion'
                                placeholder='Description'
                                name='description'
                                onChange={handleChange}
                            />
                            <Button type='submit'>Create</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

export default NewNote;