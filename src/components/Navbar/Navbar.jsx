import React, { Component } from 'react'
import { MenuItems } from './MenuItem'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

class Navbar extends Component {
    state = { cliked: false }
    handleClick = () => {
        this.setState({ cliked: !this.state.cliked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="navbar-logo">Lotto Cinema</h1>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-end my-3">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>

                                <button>dang nhap</button>
                                <button>dang nhap</button>
                            </div>

                            <ul className="nav-menu">
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a className={item.cName} href={item.url}>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>


            </nav>

        )
    }
}

export default Navbar