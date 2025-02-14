import React from 'react';
import './Result.css';
import { Card, Button } from 'pixel-retroui';
import catImage from './cat.jpg';

const Result = () => {
    return (
        <>
            <div className="Result">
                <p className="head">RESULT</p>
                <div className="container">
                    <div className='container1'>
                        <Card className="retro-card">
                            <img src={catImage} alt="profile" className="pfp" />
                            <div className='omg'>
                                <div className="user">
                                    <h2 className="username">Card Title</h2>
                                    <p className="email">This is the card content.</p>
                                </div>
                                <Button className="but1" onClick={() => console.log('Clicked!')}>
                                    Feedback
                                </Button>
                            </div>
                        </Card>

                        <div className='container2'>
                            <Card className="card1">
                                <div className="result1">10</div>
                                <h2 className="r1">RANK</h2>
                            </Card>
                            <Card className="card2">
                                <div className="result2">10</div>
                                <h2 className="r2">SCORE</h2>
                            </Card>
                        </div>
                    </div>

                    <Card className="outer-card">
                        <h2 className="r3">STATS</h2>
                        <Card className="card3">
                            <p className="name31">Attempted Questions = 10</p>
                        </Card>
                        <Card className="card3">
                            <p className="name31">Accuracy = 100%</p>
                        </Card>
                        <Card className="card3">
                            <p className="name31">Correct Questions = 10</p>
                        </Card>
                        <Card className="card3">
                            <p className="name31">Total Questions = 10</p>
                        </Card>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Result;