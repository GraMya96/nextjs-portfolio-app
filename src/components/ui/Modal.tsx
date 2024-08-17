import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import mq from '@/styles/utils/mediaQueries';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
}): React.ReactElement => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen) return <></>;

	return ReactDOM.createPortal(
		<Backdrop onClick={onClose}>
			<Content onClick={(e) => e.stopPropagation()}>{children}</Content>
		</Backdrop>,
		document.body
	);
};

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	z-index: 1000;
`;

const Content = styled.dialog`
	width: 100%;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

	${mq.big_mobile} {
		width: 75%;
	}

	${mq.tablet} {
		width: 55%;
	}
	${mq.laptop} {
		width: 35%;
	}
`;

export default Modal;
