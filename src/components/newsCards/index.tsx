import React from "react";
import Moment from 'moment';
import { useAppDispatch } from "redux/store";
import { Row, Col, Container, Card } from "react-bootstrap";
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";
import Pagination from '@vlsergey/react-bootstrap-pagination';
import Badge from "react-bootstrap/Badge";
import { setMessage, clearMessage } from "redux/slices/message";

import { getNews } from "./index.service";

export const NewsCards: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [news, setNews] = React.useState({} as any);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "9";
  const filter = searchParams.get("filter") ?? "";

  const handleChangePage = React.useCallback((event) => {
    const queryParams = createSearchParams({
      limit,
      filter,
      page: event.target.value as string,
    }).toString();
    navigate(`/react_news/news?${queryParams}`);
  }, [navigate, limit, filter]);
  
  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const queryParams: any = { page, limit }
        if(filter !== "") {
          queryParams.filter = filter
        }
        const response = await getNews(queryParams)
        setNews(response.data)
      } catch(error) {
        dispatch(setMessage(error.response.data.error.message))
        setTimeout(() => dispatch(clearMessage()), 5000)
      }
    }
    fetchNews()
  }, [dispatch, page, limit, filter])
  return (
    <Container className="my-5 flex-grow-1">
      <Row className="justify-content-center">
        <Pagination
          onChange={handleChangePage}
          aroundCurrent={3}
          showFirstLast={true}
          showPrevNext={true}
          firstPageValue={1}
          atBeginEnd={1}
          value={news.page}
          totalPages={news.pages}
        />
      </Row>
      <Row>
        {(news?.data ?? []).map((article) => (
          <Col
            md={4}
            key={article._id}
            className="mb-3"
          >
            <Card className="border-none">
              <Card.Body>
                <Card.Link rel="noopener noreferrer" target="_blank" href={article.link}>
                  <Card.Title>{article.title}</Card.Title>
                </Card.Link>
                <Card.Text>{Moment(article.isoDate).format('DD-MM-YY hh:mm')}</Card.Text>
                <Card.Text>
                  {(article.categories ?? []).map((item, index) => (
                    <Badge className="ml-1" variant="secondary" key={`${article._id}-${index}`}>
                      {item}
                    </Badge>
                  ))}
                </Card.Text>
                <Card.Text>{article.contentSnippet}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Pagination
          onChange={handleChangePage}
          aroundCurrent={3}
          showFirstLast={true}
          showPrevNext={true}
          firstPageValue={1}
          atBeginEnd={1}
          value={news.page}
          totalPages={news.pages}
        />
      </Row>
    </Container>
  );
};
