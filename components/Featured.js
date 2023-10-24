import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

export default function Featured({ product }) {

  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(prev => [product._id]);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>

              <ButtonsWrapper>
                <ButtonLink href={'/product/' + product._id} outline={1} white={1} >Read more</ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                                    Add to Cart
                                    </Button>
              </ButtonsWrapper>
            </div>

          </Column>
          <Column>
            <img src="data:image/jpeg;base64,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" />
          </Column>
        </ColumnsWrapper>

      </Center>
    </Bg>
  );
}