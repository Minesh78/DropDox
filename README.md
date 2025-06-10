# DropDox



DropBox Clone - Next.js File Storage Application
A modern, secure file storage application built with Next.js that provides a seamless experience for storing and managing your images. Featuring a sleek interface with drag-and-drop upload functionality, user authentication, and cloud-based storage.

🎯 Overview
This project is a DropBox-inspired file storage application that allows users to securely upload, store, and manage their images in the cloud. Built with modern technologies and focused on user experience, it provides a simple yet powerful solution for personal cloud storage.

![image](https://github.com/user-attachments/assets/aa9cec83-5422-4f80-bc53-740963cacb67)

✨ Features
🔐 Secure Authentication - User authentication powered by Clerk

📁 File Management - Upload, view, download, and delete files

🎨 Modern UI - Beautiful interface built with Hero UI and Tailwind CSS

📱 Responsive Design - Works seamlessly across all devices

☁️ Cloud Storage - Files stored securely using ImageKit

🗄️ Database - User and file metadata managed with Neon PostgreSQL

⚡ Fast Performance - Optimized with Next.js App Router

🔄 Real-time Updates - Instant feedback on file operations

🛠️ Tech Stack
Frontend
Next.js - React framework for production

Hero UI - Modern React component library

Tailwind CSS - Utility-first CSS framework

React - JavaScript library for building user interfaces

Backend
Neon - Serverless PostgreSQL database

PostgreSQL - Robust relational database

Authentication
Clerk - Complete authentication solution

File Storage
ImageKit - Image optimization and storage service

Deployment
Vercel - Platform for deployment (recommended)

System Architecture
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   External      │
│   (Next.js)     │    │   (API Routes)  │    │   Services      │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ • Hero UI       │◄──►│ • Auth Middleware│◄──►│ • Clerk Auth    │
│ • Tailwind CSS  │    │ • File Handlers │    │ • Neon DB       │
│ • React         │    │ • DB Queries    │    │ • ImageKit      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
