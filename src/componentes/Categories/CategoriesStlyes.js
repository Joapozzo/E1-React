import { styled } from "styled-components";

export const CategoriesWrapper = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 1300px;
	margin: 0 15px;
    padding: 150px 0 50px 0;
    gap: 40px;
	@media (max-width: 768px) {
		padding-top: 30px;
		text-align: center;
	}
`

export const CategoriesTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        color: var(--blue);
    }

    span {
        color: var(--red);
        width: 80px;
        height: 2px;
    }
`

export const CategoriasContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;

    a {
        color: var(--blue);
        font-size: 17px;
        font-weight: 500;
    }
`
