// src/components/AuthScreen.tsx
import React from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthScreen: React.FC = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async (credentialResponse: any, role: string) => {
    try {
      const { credential } = credentialResponse;
      // Send token to your backend for verification
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { idToken: credential, role }
      );

      // Handle the response and navigate based on role
      if (role === 'photographer') {
        navigate('/photographer/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">PhotosBecho Login</h1>
      <div className="flex space-x-4">
        <div>
          <GoogleLogin
            onSuccess={(res) => handleGoogleLogin(res, 'user')}
            onError={() => console.log('Login Failed')}
            useOneTap
          />
          <p className="text-center mt-2">Login as User</p>
        </div>
        <div>
          <GoogleLogin
            onSuccess={(res) => handleGoogleLogin(res, 'photographer')}
            onError={() => console.log('Login Failed')}
            useOneTap
          />
          <p className="text-center mt-2">Login as Photographer</p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
