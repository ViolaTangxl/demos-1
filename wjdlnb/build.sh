#<------------------------------------------------------------------------------->
## spock prod 环境的编译脚本
## 当前可用环境变量如下，你可在构建脚本里进行引用使用
## WORKSPACE  工作目录
## IMAGE      输出镜像名称
## PKG_FILE   构建出的 tar 包名称
## DIST_DIR   构建出 tar 包的目的目录
## SERVICE    构建的服务名称
## README     构建信息文件
#<------------------------------------------------------------------------------->
#!/bin/bash
set -ex

WORK_DIR_PATH=$WORKSPACE/www/front/wjdlnp
PKG_PATH=$WORKSPACE/www/_package
WJDLNP_FRONT_DIST_PATH=$WORK_DIR_PATH/dist
WJDLNP_FRONT_SPOCK_PATH=$WORK_DIR_PATH/spock

cd $WORK_DIR_PATH && yarn install

fec-builder --verbose -e production -c build-config.prod.json build

mkdir -p $PKG_PATH

cp -r $WJDLNP_FRONT_DIST_PATH $PKG_PATH
cp -r $WJDLNP_FRONT_DIST_PATH $WJDLNP_FRONT_SPOCK_PATH

cd $WJDLNP_FRONT_SPOCK_PATH
docker build --rm -t $IMAGE -f Dockerfile .
docker push $IMAGE

cd $WJDLNP_FRONT_DIST_PATH && tar -czf ../dist.tar.gz ./*

mv ../dist.tar.gz $DIST_DIR/$PKG_FILE
