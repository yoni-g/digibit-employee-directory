import React from 'react';
import Container from 'react-bootstrap/Container';

// This wrapper gives the main section semantic value and the background color.
function Main(props) {
    return (
        <main className="bg-color">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}


export default Main;