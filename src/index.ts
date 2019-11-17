import Koa from 'koa';
import Router from '@koa/router';
import morgan from 'koa-morgan';

const app = new Koa();
const router = new Router();

router.get('/up', (ctx, _next) => {
	ctx.body = {
		up: true,
		down: false
	};
});

app.use(morgan('combined'));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log('started on port 3000');
