package digital.booking.services;

import digital.booking.entities.Category;
import digital.booking.exceptions.NotFoundException;
import digital.booking.interfaces.IService;
import digital.booking.repositories.CategoryRepository;
import org.apache.log4j.Logger;

import java.util.List;

public class CategoryService implements IService<Category> {
    private final Logger logger = Logger.getLogger(CategoryService.class);
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> searchAll() {
        logger.debug("Searching all categories...");
        return categoryRepository.findAll();
        // Pendiente: agregar una exception (ver si de service) en caso de que no haya categorias.
    }

    @Override
    public Category searchById(Long id) throws NotFoundException {
        return null;
    }

    @Override
    public Category save(Category entity) {
        return null;
    }

    @Override
    public Category update(Category entity) {
        return null;
    }

    @Override
    public Boolean delete(Long id) {
        return null;
    }
}
