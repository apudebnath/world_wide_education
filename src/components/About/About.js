import React from 'react';
import img from '../../images/aboutt.jpg';

const About = () => {
    return (
        <div className="my-5">
            <h2 className="py-3">About us</h2>
            <div className="d-flex pt-5 text-align-center">
                <div className="ms-5 w-50">
                   <img className="w-100" src={img} alt="" />
                </div>
                <div className="mx-5 w-50">
                    <h4>About World Wide Education.</h4>
                    <p>There are many good programmers out there who were self-taught! ... But yes, it is entirely possible that you can be a self-taught programmer. However, it will be a long, tedious process. There's a saying that it takes roughly 10,000 hours of practice to achieve mastery in a field.</p>
                    <p>How do I start learning programming?
                        All slides
                        14 Great Ways to Teach Yourself to Code.
                        Ask yourself: Why do you want to learn how to code?
                        Choose the right programming language.
                        Try out some online courses.
                        Focus on learning computational thinking.
                        Get a book.
                        Check out some interactive tutorials or coding games.
                        Try a kid's toy.     </p>
                     <p>
                        14 Great Ways to Teach Yourself to Code.
                        Ask yourself: Why do you want to learn how to code?
                        C                         hoose the right programming language.
                        Try out some online courses.
                        Focus on learning computational thinking.
                        Get a book.
                        Check out some interactive tutorials or coding games.
                        Try a kid's toy.
                     </p>
                  </div>
            </div>
        </div>
    );
};

export default About;