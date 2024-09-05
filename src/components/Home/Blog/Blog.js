import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import blogImg1 from '../../../images/cleanBlog-1.png';
import blogImg2 from '../../../images/cleanBlog-2.png';
import blogImg3 from '../../../images/cleanBlog-3.png';
import './Blog.css';

const blogData = [
    {
        _id: 1,
        title: 'Professional gilam tozalash',
        date: '16 March, 2021',
        post: 'Tozalash - axloqsizlik, yuqumli agentlar kabi kiruvchi moddalarni olib tashlash jarayoni. Changni tozalash, tozalash, pollarni mumlash va changyutgichni tozalash kabi vazifalar.',
        image: blogImg1
    },
    {
        _id: 2,
        title: 'Ofis tozalovchining e\'tiroflari ',
        date: '09 June, 2020',
        post: ' Ikki xonali uyni tozalash uchun haftasiga 2 1/2 soat vaqt ajrating. Chuqur tozalashga qaror qilganingizda, haftasiga qo\'shimcha 1 soat qo\'shishingiz kerak. Agar sizda odatiy bo\'lsa',
        image: blogImg2
    },
    {
        _id: 3,
        title: 'Ofisda yaxshi gigienani ta\'minlang',
        date: '29 March, 2020',
        post: 'Changni tozalash, pollarni supurish va changyutgichni tozalash kabi vazifalar. To\'ldirish materiallari, masalan, hojatxona qog\'ozi. To\'kilgan narsalarni, singan oynalarni va boshqa tartibsizliklarni tozalash.',
        image: blogImg3
    }
]

const Blog = () => {
    return (
        <section className='blog-container mt-5 py-5'>
            <div className="container">
                <h1 className='text-center'>Tozalash sanoati  <span>Yangiliklari</span></h1>
                <p className='text-center'>Biz sanoat ishlanmalari, o'qitish, sog'liq va xavfsizlik, ekologik toza tozalash vositalari, qayta ishlash amaliyotlari va professional tozalagichlar bilan ishlash bo'yicha maslahatlar haqida yozamiz.</p>
                <div className="blog-post">
                    {
                        blogData.map(blog => <BlogPost key={blog._id} blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;