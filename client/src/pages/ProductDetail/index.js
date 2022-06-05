import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { product_id } = useParams();
  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error.</div>;
  }

  const images = data.photos.map((url) => ({ original: url }));

  console.log(process.env.REACT_APP_BASE_ENDPOINT);

  return (
    <div className="detail">
      <Box margin="auto" width="600px">
        <ImageGallery items={images} />
      </Box>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Button colorScheme="pink">Add To Basket</Button>
    </div>
  );
}

export default ProductDetail;
