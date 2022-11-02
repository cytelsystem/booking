package digital.booking.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import digital.booking.entities.City;
import digital.booking.exceptions.BadRequestException;
import digital.booking.exceptions.NotFoundException;
import digital.booking.interfaces.IService;
import digital.booking.repositories.CityRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CityService implements IService<City> {
    private final Logger logger = Logger.getLogger(CategoryService.class);

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private ObjectMapper mapper;
    @Override
    public List<City> searchAll() {
        logger.debug("Searching all cities...");
        return cityRepository.findAll();
    }

    @Override
    public City searchById(Long id) throws NotFoundException {
        return null;
    }

    @Override
    public City create(City entity) throws BadRequestException {
        return null;
    }

    @Override
    public City update(City entity, Long id) throws NotFoundException {
        return null;
    }

    @Override
    public void delete(Long id) throws NotFoundException {

    }
}
