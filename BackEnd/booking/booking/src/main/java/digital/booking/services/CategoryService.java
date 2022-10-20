package digital.booking.services;

import digital.booking.entities.Category;
import digital.booking.exceptions.NotFoundException;
import digital.booking.interfaces.IService;
import digital.booking.repositories.CategoryRepository;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
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
        // Acá no habría que agregar Jackson library para poder usar el mapper para el Optional?
        logger.debug("Searching category with id: " + id);
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            // return mapper.convertValue(category, Category.class) (ej.)
            return null;
        } else {
            throw new NotFoundException("The category with id: "+ id + " doesn´t exists.");
        }
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
