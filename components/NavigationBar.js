import Link from "next/link";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Link href="/" passHref>
                    <Navbar.Brand href="/">
                        <p>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </p>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Preparation" id="preparation-drop">
                            <Link
                                href="/Preparation/Before_the_Piscine"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Before the Piscine
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/Preparation/CLI_and_Zsh" passHref>
                                <NavDropdown.Item>CLI & Zsh</NavDropdown.Item>
                            </Link>

                            <Link href="/Preparation/Text_Editor" passHref>
                                <NavDropdown.Item>Text Editor</NavDropdown.Item>
                            </Link>

                            <Link href="/Preparation/Git" passHref>
                                <NavDropdown.Item>Git</NavDropdown.Item>
                            </Link>

                            <Link
                                href="/Preparation/The_C_Programming_Language"
                                passHref
                            >
                                <NavDropdown.Item>
                                    The C language
                                </NavDropdown.Item>
                            </Link>

                            <Link
                                href="/Preparation/Putting_it_all_together"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Putting it all together
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <NavDropdown title="Info & Sources">
                            <Link href="/InfoSources/Prep_sources" passHref>
                                <NavDropdown.Item>
                                    Prep Sources
                                </NavDropdown.Item>
                            </Link>
                            <Link
                                href="/InfoSources/Blogs_and_reviews"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Blogs & Reviews
                                </NavDropdown.Item>
                            </Link>

                            <Link href="/InfoSources/Negatives" passHref>
                                <NavDropdown.Item>Negatives</NavDropdown.Item>
                            </Link>
                            <Link
                                href="/InfoSources/Differences_between_campuses"
                                passHref
                            >
                                <NavDropdown.Item>
                                    Campus Differences
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/InfoSources/Interviews" passHref>
                                <NavDropdown.Item>Interviews</NavDropdown.Item>
                            </Link>
                            <Link href="/InfoSources/Dorms" passHref>
                                <NavDropdown.Item>Dorms</NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <Link href="/History_of_42" passHref>
                            <Nav.Link>History of 42</Nav.Link>
                        </Link>

                        <Link href="/Updates" passHref>
                            <Nav.Link>Updates</Nav.Link>
                        </Link>

                        <Link href="/History_of_42" passHref>
                            <Nav.Link></Nav.Link>
                        </Link>

                        <Link href="/Pros_and_Cons" passHref>
                            <Nav.Link>Pros and Cons</Nav.Link>
                        </Link>

                        <Link href="/About" passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>

                        <Link href="/Contact" passHref>
                            <Nav.Link>Contact</Nav.Link>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
