import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/up', (ctx, _next) => {
	ctx.body = {
		up: true,
	};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
