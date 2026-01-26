import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function AddLesson() {
    const sectionId = useParams();

    console.log('SECTION ID : ', sectionId);
    const [form, setForm] = useState({
        title: '',
        content: '',
        order: Number,
        preview: Boolean,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            // const response = await axios.post(
            //     // 'http://localhost:3000/api/v1/sections/:sectionId/lessons',
            //     'http://localhost:3000/api/v1/mentor/sections/:sectionId/lessons',
            //     {...form},
            //     {
            //         headers: {
            //             Authorization: `Bearer ${token}`,
            //         },
            //     }
            // );
            console.log(typeof(form.order));
            const response = await axios.post(
                'http://localhost:3000/api/v1/mentor/sections/:sectionId/lessons',
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("ADD LESSON: ",response);
        } catch (error) {
            console.log("ERROR FROM ADDLESSON" , error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Title">Title: </label>
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            title: e.target.value,
                        }))
                    }
                />
                <label htmlFor="Content">Content: </label>
                <input
                    type="text"
                    placeholder="Content"
                    value={form.content}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            content: e.target.value,
                        }))
                    }
                    required
                    className="border p-2 mb-4 w-full rounded-lg"
                />
                <label htmlFor="Order">Order: </label>
                <input
                    type="number"
                    placeholder="Order"
                    value={form.order}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            order: e.target.value,
                        }))
                    }
                />
                <label htmlFor="Preview">Preview: </label>
                <input
                    type="boolean"
                    placeholder="Preview"
                    value={form.preview}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            preview: e.target.value,
                        }))
                    }
                />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddLesson;
