import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://663cb8b017145c4d8c376568.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts');
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContact = createAsyncThunk("contacts/addContact", 
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post('/contacts', contact);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk("contacts/deleteContact", 
    async (contactID, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactID}`);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
) 