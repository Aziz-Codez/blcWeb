import React from 'react';
import "./environment.css";

const images = [
    {
        src:'images/environment/hpe.png',
        alt:"hpe"
    },
    {
        src:'images/environment/apache.png',
        alt:"apache"
    },
    {
      src:'images/environment/ansible.png',
      alt:"ansible"
    },
      {
        src:'images/environment/aws.png',
        alt:"aws"
      },
      {
        src:'images/environment/docker.png',
        alt:"docker"
      },
      {
        src:'images/environment/java.png',
        alt:"java"
      },
      {
        src:'images/environment/kubernetes.jpg',
        alt:"kubernetes"
      },
      {
        src:'images/environment/openstack.png',
        alt:"openstack"
      },
      {
        src:'images/environment/postgresql.webp',
        alt:"postgresql"
      },
      {
        src:'images/environment/python.png',
        alt:"python"
      },
      {
        src:'images/environment/react.png',
        alt:"react"
      },
      {
        src:'images/environment/tensorflow.png',
        alt:"tensorflow"
      },
      {
        src:'images/environment/vmware.png',
        alt:"vmware"
      },
  ];

function Environment() {
    return(
        <div className='environmentdiv'>
            <div className='environmentbox'>
                {images.map((img, index) => <img key={index} alt={img.alt} className="environmentimage" src={img.src} />)}
            </div>
        </div>
    )
};

export default Environment;