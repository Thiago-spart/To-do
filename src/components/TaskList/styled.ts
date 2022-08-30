import styled from "styled-components";

interface TaskItemProps {
	isComplete: boolean;
}

export const Container = styled.section`
	background: var(--shapes);
	border-radius: 1rem;
	margin: 0 auto;

	padding: 2.5rem 1rem;
	margin-top: -10rem;
	padding: 70px 60px;
	max-width: 1120px;

	filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		h2 {
			color: var(--text-title);
			font-size: 2.25rem;
		}
	}
`;

export const InputGroup = styled.div`
	display: flex;
	gap: 0.25rem;
	align-items: center;

	background: #fff;
	font-size: 16px;

	input {
		flex: 1;
		background: var(--background);
		border: 0;
		color: var(--text);
		padding: 12px 24px;

		border-radius: 8px;
		border: 0;

		&::placeholder {
			color: var(--text-light);
		}
	}

	button {
		font-weight: 600;
		border-radius: 8px;
		border: 0;
		background: var(--green);
		color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;

		padding: 14px;
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.95);
		}

		svg {
			font-size: 1rem;
			color: #ffffff;
		}
	}
`;

export const TaskListContainer = styled.main`
	margin-top: 3rem;
`;

export const TaskItem = styled.li<TaskItemProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ebebeb;
	padding: 1rem 0;

	div {
		display: flex;
		align-items: center;
		gap: 14px;
		outline: 0;

		p {
			font-size: 1rem;
			color: var(--text);
			text-decoration: ${({ isComplete }) => isComplete && "line-through"};
			opacity: ${({ isComplete }) => isComplete && "0.6"};
		}
	}

	button {
		background: transparent;
		border: 0;

		svg {
			color: var(--red);
			font-size: 1rem;
		}

		&:hover svg {
			filter: brightness(0.5);
		}
	}
`;

export const CheckBoxContainer = styled.label`
	display: block;
	position: relative;
	padding-left: 14px;
	margin-bottom: 18px;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;

		&:checked {
			& ~ span {
				background-color: var(--blue);
			}

			& ~ span:after {
				display: block;
			}
		}
	}

	span {
		position: absolute;
		top: 0;
		left: 0;
		width: 16px;
		height: 16px;
		background-color: var(--background);
		border-radius: 2px;

		&:after {
			content: "";
			position: absolute;
			display: none;
			left: 6px;
			top: 3px;
			width: 3px;
			height: 6px;
			border: solid white;
			border-width: 0 2px 2px 0;
			transform: rotate(45deg);
		}
	}
`;
