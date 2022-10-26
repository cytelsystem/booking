package digital.booking.services;

import digital.booking.DTO.CategoryDTO;
import digital.booking.exceptions.BadRequestException;
import digital.booking.exceptions.NotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;

    CategoryDTO categoryDTO = new CategoryDTO(1L,"titleTest","descriptionTest","imageURLTest");


    @Test
    public void testCreate() {
        try{
            categoryService.create(categoryDTO);

            CategoryDTO categoryTest = categoryService.searchById(1L);
            assertNotNull(categoryTest,"The category is null");
            assertEquals(categoryDTO.getTitle(), categoryTest.getTitle(), "Titles don't match.");
            assertEquals(categoryDTO.getDescription(), categoryTest.getDescription(), "Descriptions don't match.");
            assertEquals(categoryDTO.getImageURL(), categoryTest.getImageURL(), "ImageURLs don't match.");

        } catch (BadRequestException | NotFoundException e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSearchById(){
        try {
            CategoryDTO categoryFounded = categoryService.searchById(categoryDTO.getId());
            assertEquals(categoryDTO.getId(), categoryFounded.getId(), "Ids don't match.");
            assertNotNull(categoryFounded,"The categpry founded is null.");

        } catch (NotFoundException e){
            e.printStackTrace();
        }
    }



}
