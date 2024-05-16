import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PostItem from '../PostItem'
import Title from '../Title'

const PostList = ({ products }) => {
    const { name } = useParams();
    const filtrado = name? products.filter(product=>product.category.name === name):products
    
    return (
        <div>
            <Title title={`${name? name:"MOST POPULAR PRODUCTS"}`} />
            <Container sx={{ mt: 5, mb: 5 }}>
            
            
            <Grid container spacing={1.50} columns={12}>
                {filtrado.map((products) => (
                    <Grid key={products.id} item xs={6} md={4}>
                            <Link to={`/item/${products.id}`} >
                            <PostItem products={products} />
                    </Link>
                        </Grid>

                ))}
                </Grid>
            </Container></div>
    )
}

export default PostList