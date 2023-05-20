import { AnimatePresence, HTMLMotionProps, LayoutGroup, MotionProps, motion } from 'framer-motion';
import { AnchorHTMLAttributes, PropsWithChildren, ReactNode, useState } from 'react';
import styled, { StyledProps } from 'styled-components';

const Container = styled(motion.a)`
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.3px;

    & > .icon {
        svg {
            height: 1.1em;
            margin-top: 4px;
        }
    }

    &:hover { 
        background-color: black;
        color: white;
    }
`;

export interface ButtonProps extends HTMLMotionProps<"a"> {
    icon: ReactNode;
}

export default function Button({ icon, children, ...props }: ButtonProps) {
    const [isHovered, setHovered] = useState(false);

    return (
        <Container {...props} onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)} layout>
            <LayoutGroup>
                <AnimatePresence>
                    {isHovered && (
                        <motion.span className="label" layout style={{ opacity: 0 }} animate={{ opacity: 1}}>
                            {children}
                        </motion.span>
                    )}
                </AnimatePresence>
                <motion.span className="icon"> 
                    {icon}
                </motion.span>
            </LayoutGroup>
        </Container>
    );
}