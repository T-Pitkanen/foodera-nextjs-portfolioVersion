'use client';
import styles from './page.module.css';
export default function Page() {


    const handleSubmit = async (e) => {

        e.preventDefault();

        const {file} = e.target.elements;
       
        if(!file.files[0]) {

            console.log('Du mangler at tilføje en fil!');
            return;

        }

    
        const formData = new FormData();
        formData.append('file', file.files[0]);

        let response = await fetch('http://localhost:3000/api/single', {
            method: 'POST',
            body: formData
        })

  

    }


    return (
        <div className={styles.page}>

            <h1>Edit Subscriptions</h1>

            <form onSubmit={handleSubmit}>
                <label> Choose File
                    <input type="file" name="file" placeholder="Select File"/>
                </label>
                <button>Upload</button>
            </form>   

        </div>
    )
    
}