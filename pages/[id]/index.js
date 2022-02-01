import { useState, useEffect } from 'react';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            deleteNote();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteNote = async () => {
        try {

            
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1>{note.title}</h1>
                    <p>{note.description}</p>
                    <Button color='red' onClick={open}>Delete</Button>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    )
}


export default Note;