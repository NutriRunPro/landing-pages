{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh17440\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function validateForm() \{\
    const name = document.getElementById("name").value;\
    const email = document.getElementById("email").value;\
    const terms = document.getElementById("terms").checked;\
\
    if (name === "" || email === "" || !terms) \{\
        alert("Por favor, completa todos los campos y acepta los t\'e9rminos y condiciones.");\
        return false;\
    \}\
\
    return true;\
\}\
}
