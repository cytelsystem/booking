package digital.booking.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import digital.booking.entities.Category;
import digital.booking.exceptions.BadRequestException;
import digital.booking.exceptions.NotFoundException;
import digital.booking.interfaces.IService;
import digital.booking.repositories.CategoryRepository;
import org.apache.log4j.Logger;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements IService<Category> {
    private final Logger logger = Logger.getLogger(CategoryService.class);
    @Autowired
    private final CategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> searchAllCategories() throws ServiceException {
        logger.debug("Searching all categories...");
        List<Category> categories = categoryRepository.findAll();
        if (categories.isEmpty()){
            throw new ServiceException("There are no categories to list.");
        } else {
            return categories;
        }
    }

    @Override
    public Category searchCategoryById(Long id) throws NotFoundException {
        logger.debug("Searching category with id: " + id);
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            return mapper.convertValue(category, Category.class);
        } else {
            throw new NotFoundException("The category with id: "+ id + " does not exists.");
        }
    }

    @Override
    public void createCategory(Category category) {
        logger.debug("Creating new category...");
        categoryRepository.save(category);
    }

    @Override
    public void updateCategory(Category category) throws BadRequestException {
        if (category.getId() == null) {
            throw new BadRequestException("The category you are trying to modify does not exist.");
        } else {
            logger.debug("Updating category...");
            saveCategory(category);
        }
    }

    private void saveCategory(Category category) {
        logger.debug("Saving category...");
        categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long id) throws NotFoundException {
        if (categoryRepository.findById(id).isEmpty()){
            throw new NotFoundException("The category with id: "+ id + " does not exists.");
        } else {
            logger.debug("Deleting category with id: " + id);
            categoryRepository.delete(categoryRepository.findById(id).get());
        }
    }
}
