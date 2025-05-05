import React, { useState, useEffect } from 'react';
import { db, app } from './firebase';

function App() {
    // store the state of transactions
    const [transactions, setTransactions] = useState([])
    const [newTransactions, setNewTranasactions] = useState('')
}
