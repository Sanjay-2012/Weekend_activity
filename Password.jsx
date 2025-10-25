import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordGenerator = () => {
    const [length, setLength] = useState(20);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false);

    const generatePassword = () => {
        let charset = '';
        if (uppercase) {
            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (lowercase) {
            charset += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (numbers) {
            charset += '0123456789';
        }
        if (symbols) {
            charset += '!@#$%^&*()_+[]{}<>?/|';
        }

        if (charset.length === 0) {
            setPassword('Select at least one option');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        setPassword(newPassword);
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (password && password !== 'Select at least one option') {
            navigator.clipboard.writeText(password);
            setCopied(true);
        }
    };

    return (
        <div className="container mt-5 p-4 border rounded bg-dark text-light" style={{ maxWidth: '600px' }}>
            <h3 className="text-center mb-4"> Password Generator</h3>

            {password && (
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={password} readOnly />
                    <button className='btn btn-primary' onClick={copyToClipboard}>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            )}

            <div className="mb-3">
                <label className="form-label">Password Length</label>
                <input
                    type="number"
                    className="form-control"
                    min="4"
                    max="20"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                />
            </div>

            <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
                <label className="form-check-label">Include Uppercase Letters</label>
            </div>

            <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
                <label className="form-check-label">Include Lowercase Letters</label>
            </div>

            <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
                <label className="form-check-label">Include Numbers</label>
            </div>

            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
                <label className="form-check-label">Include Symbols</label>
            </div>

            <div className="d-grid gap-2 mb-3">
                <button className="btn btn-primary" onClick={generatePassword}>Generate Password</button>
            </div>


        </div>
    );
};

export default PasswordGenerator;